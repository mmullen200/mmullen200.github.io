---
title: Your AI Chatbot Only Speaks Token
date: 2026-03-10
draft: false
tags:
  - ai
  - linguistics
  - tokenization
  - llms
---
AI writes with clarity, better than most humans. It can be jocular, sweet, grim and serious, based on your desires. It has those human attributes and it knows most human intellectual fields, even if it does make mistakes. Right now this tech is like a wave that in a couple of years has grown from a small swell into what is likely a coming tsunami. You can either try to swim against it or just be carried along. Sorry for the hacky metaphor, but there is also a middle way where you surf this wave without being swept away. (Surfing on tsunamis is not recommended.) Learning about how it's built and what it's really doing is an excellent start in decreasing your anxiety level and possibly even thriving. But it's best to take it in small, easy pieces at least at first.

If this piques your interest and you decide to go much deeper, fantastic! I'm happy to suggest a few different paths. And we need more curious people in diverse fields wrestling with this technology. The more you learn to harness these artificial minds, the better you'll be able to do your job and avoid potential oblivion. Wharton professor Ethan Mollick has learned in his research that [people who are experts in a field are the best at using AI in their own field](https://www.linkedin.com/posts/emollick_experts-in-a-field-are-going-to-be-the-best-activity-7210170037431603201-auUv/). Lawyers are the ones who will learn to best use AI in the law field. Radiologists will make the AI breakthroughs in radiology. That goes for your career as well. Start learning small things, and as you dig a little deeper, write down the ideas that bubble up. For me, taking action in this way decreases my anxiety.

I want you to be able to read this post in just a few minutes and play around with the toy linked below. You'll use that toy, called Tiktokenizer, to hammer out AI tokens in the same way that an LLM does. You'll get a glimpse of how an AI thinks. And you'll see that even though it's communications seem quite human, its brain couldn't be more from ours.

So onward!

When you type a question into ChatGPT or Claude, it kicks off a many-layered process until it spits out a response. Many layers but nothing more complicated than addition and multiplication in terms of math. It's so powerful because of centuries of thinking and experimentation and failure and eventual success (from George Boole to Alan Turing to Geoffrey Hinton) and due in no small part to how powerful our computers have become. There's no quantum super brain behind the curtain.

So we'll take the first steps through the front door of the LLM, when you write your prompt, then we'll skip to the end and walk out the back door when you get your answer. Other than the broad explanation above (lots of clever layers, simple calculations performed billions of times) we will ignore the steps in the middle. I'm sure I will write about those another time.

You already know the next bit, though it's not intuitive when you're having a breezy chat about baseball with your AI pal: Computers and LLMs don't think in words, only in numbers. Computers, as you know, only think in 0s and 1s and we build layers and layers of technology on top of that so we can communicate. I'll repeat it since it's obvious and too easy to gloss over: Computers don't know what words are, they don't recognize any meaning in words.

So we have to take the words that we use, transform those words into numbers and then at the end of the process, get them back as words in a way that makes sense to humans. We use words, which are vague and easily misinterpreted, and somehow our brains extract meaning. The AI only sees and mathematical relationships yet it has learned to communicate with us. It might even get you to think a little about the nature of intelligence.

But let's get into an example to make this fun and concrete. Let's take the following slightly contrived sentence you might ask an LLM if you're planning an off-the-cuff trip to Mongolia:

*What's the weather today in Ulaanbaatar, the capital of Mongolia? Is it raining or sunny?*

If you'd like to follow along with what I'm doing, [here is the online toy we're using for this experiment](https://tiktokenizer.vercel.app/?model=codellama%2FCodeLlama-70b-hf). You can type in any old sentence or the one I chose. You can also choose among many different models, I went with the tokenization scheme for Meta's Llama 3 8B but feel free to try different ones. Here are the results.

![[Screenshot 2026-03-11 at 10.30.43.png]]

The words are split up into festive colors and below that are the numerical tokens that the LLM will use to interpret your message. The word "token" has a long history in computer science, one of many examples where a very old word is co-opted, in this case meaning something concrete like a coin or an old-timey subway token. "Token" in this case just means a chunk of information.

What you see in the screenshot is what happens when you write your prompt. Anyone anywhere who writes a prompt that includes the word "What" will create the token 3923 for the LLM's consumption. And the word " today" with that space included will always spit out 3432. These are the numerical tokens the LLM was trained on, so it needs to get the same tokens from you so it can take advantage of that training to come up with a useful reply.

If you look closely at the color coding, you'll see that some of the bits are whole words and some of them are pieces of words. Why? It's an imperfect compromise. We could have a token for every single letter but that would be computationally too expensive. Take a word like Ulaanbaatar. Figuring out how every letter relates to every other would mean connecting 11 letters, 11<sup>2</sup> or 121 connections just to figure out we're talking about the capital of Mongolia. On the other side, let's say you have a unique token for Ulaanbaatar. Not only are there alternate spellings of the word, requiring their own tokens but as you would imagine, this word is spelled wrong a *lot*. You end up with a mess of extra tokens and lots more compute expense. So the compromise is to break it up into pieces.

This points again to the fact that the LLM isn't looking at words, it's looking at numerical tokens and the engineers feed it billions and billions of words, broken up into these tokens and over a long period of time, with a mountain of data, the LLM uses very simple math to figure out relationships. And honestly, it works better than anyone really ever expected. To the point that it seems intelligent. Some would argue that it is intelligent, though it's still not as fun or as surprising as a squirrel or your dog.

OK so we walk through the front door with our prompt, and our sentence is broken up into chunks (tokens) that the LLM can understand. The LLM has already been trained for many months before you got access so it has memorized a vastly complicated web of connections among these token. It applies that knowledge to reply by figuring out what is the most likely token to come next. And next and next and next. It generates those tokens as numbers then they translat back into words. It's the same process. Turns out it's neither rainy nor sunny today in Ulaanbaatar!

![[Screenshot 2026-03-11 at 10.35.06.png]]

I hope this short explanation helps to demystify the workings of LLMs just a bit and I hope it inspires you to keep making baby steps in understanding the technology. Though there are an infinite number of rabbit holes to go down, if you take those rabbit holes one at a time, I think it will pay off. And if this decreases your anxiety and inspires you to push ahead, then I have succeeded.